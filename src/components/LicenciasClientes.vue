<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
      sort-by="fechaCorteCliente"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            >Licencias de Clientes
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "cliente_id",
      },
      { text: "Nombre Cliente", value: "cliente_nombre" },
      { text: "Fecha de Corte", value: "fechaCorte" },
      { text: "Ultima Conexión", value: "ultimaConexion" },
      { text: "Nueva Fecha de Corte", value: "nuevaFechaCorte" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    clientes: [],
    editedIndex: -1,
    editedItem: {
      cliente_id: "",
      fechaCorte: 0,
      ultimaConexion: 0,
      nuevaFechaCorte: 0,
      
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.clientes = [
        [
          {
            cliente_id: 201,
            cliente_nombre: "ACLISA",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 202,
            cliente_nombre: "Ariston - RED HI",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 203,
            cliente_nombre: "ASISTIR",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 204,
            cliente_nombre: "Bernal PMI",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 205,
            cliente_nombre: "CEGO - GENS",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 206,
            cliente_nombre: "CENESA S.A.",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 207,
            cliente_nombre: "Centro de Ojos Arroyo Seco - COAS",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 208,
            cliente_nombre: "Clínica Sucre",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 209,
            cliente_nombre: "Conci",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
          {
            cliente_id: 2010,
            cliente_nombre: "DASPU",
            fechaCorte: "13/04/2022",
            ultimaConexion: "13/04/2022",
            nuevaFechaCorte: "13/04/2022",
          },
        ],
      ];
    },

    editItem(item) {
      this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.clientes.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style></style>
