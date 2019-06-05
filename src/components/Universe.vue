<template>
    <div>
        <canvas class="wall" id="myCanvas" width="1280" height="637"> </canvas>
    </div>
</template>


<script>
    const choosed = JSON.parse(localStorage.getItem('choosed')) || {};

    const speed = function () {
        return [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)];
    };

    const createHTML = function () {
        var html = ['<ul>'];
        frogs.forEach(function (item, index) {
            item.index = index;
            var color = choosed[item.name + '-' + item.phone] ? 'yellow' : 'white';
            html.push('<li><a href="#" style="color: ' + color + ';">' + item.name + '</a></li>');
        });
        html.push('</ul>');
        return html.join('');
    };

    export default {
        name: 'getApp',

        mounted() {
            debugger;
            let canvas = document.getElementById('myCanvas');
            console.log(canvas);
            canvas.innerHTML = createHTML();
            TagCanvas.Start('myCanvas', '', {
                textColour: null,
                initial: speed(),
                dragControl: 1,
                textHeight: 14
            });
        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wall {
    width: 100%;
    height: 100%;
      overflow: hidden;
      background-size: 100% 100%;
      background: #121936 url(../assets/universe.jpg) no-repeat center center;
  }

</style>
