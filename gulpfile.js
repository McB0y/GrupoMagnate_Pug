// NOTE: En este archivo de configuración gulp "NO SE HA CREADO UNA ESTRUCTURA DE ARCHIVOS DEFINITIVA",
// NOTE: por favor edite el contenido si así lo creyera conveniente.


const gulp = require('gulp');
const pug = require('gulp-pug');

//creando nuestras tareas.
// NOTE: La función pug debe recibir un objeto con las opcciones correspondientes a l salida deseada del file
gulp.task('pug', ()=>{
   gulp.src('./src/index.pug')
       .pipe(pug({
          pretty : true //esta opción nos regresa una version sin minificar
       }))
       .pipe(gulp.dest('./'))
});

// NOTE: Tarea por default

gulp.task('default', ()=>{
   gulp.watch('./src/*.pug', ['pug']);
})
