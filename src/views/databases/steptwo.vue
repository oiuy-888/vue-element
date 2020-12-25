<template>
  <div class="tableDate">
    <div align="center">
      <el-button @click="dialogFormVisible = true">查库</el-button>
    </div>

    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-form-item label="库名：" prop="check">
        <el-select v-model="databases" placeholder="请选择表" >
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          />
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
            :value="item"
          />
        </el-select>
      </el-form-item>
    </el-form>

    <div align="center">
      <el-button @click="getCreateSql()">查结构</el-button>
    </div>

    <el-dialog title="数据库配置" :visible.sync="dialogFormVisible">
      <el-form :model="form" :visible.sync="dialogFormVisible" label-width="110px" :rules="rules">
        <el-form-item label="IP" prop="ip">
          <el-input v-model="form.ip" placeholder="地址" />
        </el-form-item>
        <el-form-item label="PORT" prop="port">
          <el-input v-model="form.port" placeholder="端口" />
        </el-form-item>
        <el-form-item label="ACCOUNT" prop="name">
          <el-input v-model="form.name" placeholder="账户" />
        </el-form-item>
        <el-form-item label="POSSWORD" prop="password">
          <el-input v-model="form.password" placeholder="密码" />
        </el-form-item>
        <div align="center">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click.prevent="dialogFormVisible = false" @click="getDatabases()">确 定</el-button>
        </div>
      </el-form>
    </el-dialog>

    <div align="center">
      <el-table
        :data="options"
        :border="true"
        style="width: 100%"
      >
        <el-table-column
          label="SQL"
          prop="options"
          min-width="30%"
        />
      </el-table>
    </div>

  </div>
</template>

<script>
import StepTwo from './_steptwo.js'

export default {
  ...StepTwo
}
</script>
