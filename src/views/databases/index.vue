<template>
  <div class="tableDate">
    <div align="center">
      <el-button @click="getDatabases()">查库</el-button>
    </div>

    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="库名：">
        <el-select v-model="databases" placeholder="请选择表">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <div align="center">
      <el-button @click="getDataform()">查表</el-button>
    </div>

    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="表名：">
        <el-select v-model="dataform" placeholder="请选择表">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <div align="center">
      <el-button @click="getCreateSql()">查结构</el-button>
    </div>

  </div>
</template>

<script>
import DataComponent from './data.js'

export default {
  ...DataComponent
}
</script>
