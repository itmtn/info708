class Chart {

    constructor(data, chartWidth = 600, chartHeight = 400, offsetX = 100, offsetY = 40){   
        this.data = data;
        this.chartHeight = chartHeight;
        this.chartWidth = chartWidth;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    // quick ref for bmi calculation https://www.kiwicover.co.nz/your-health/bmi
    // BMI Category	            Male BMI Range	        Female BMI Range
    // Obese	                more than 30.0	        more than 29.0
    // Overweight	            from 25.0 to 30.0	    from 24.0 to 29.0
    // Healthy weight	        from 18.5 to 25.0	    from 18.5 to 24.0
    // Underweight	            from 16.0 to 18.5	    from 16.0 to 18.5
    // Severely underweight	    less than 16.0	        less than 16.0
    // BMI = weight(kg)/height(m)(squared)

    // calcBMI(){
    //     let keys = Object.keys(this.data);
    //     for(let i = 0; i < keys.length; i++){                        
    //         this.data[i].height = (this.data[i].height/100).toFixed(2);
    //         this.data[i].bmi = (this.data[i].weight/sq(this.data[i].height)).toFixed(2);
    //     }
    // }

    drawGrid(){   
        textSize(20);
        fill(0);
        text("BMI Height vs Weight plot", this.chartWidth/2, this.offsetY - 20);
        textSize(14);
        text("weight (kg)", this.chartWidth/2, this.chartHeight + this.offsetY + 50);

        push();
        translate(this.offsetX - 90, this.chartHeight/2 + this.offsetY);
        //rotate(1.6);
        text("height (m)", 0, 0);        
        pop();

        noFill();
        stroke(0);
        line(this.offsetX, this.offsetY, this.offsetX, this.offsetY + this.chartHeight);
        line(this.offsetX, this.offsetY + this.chartHeight, this.offsetX + this.chartWidth, this.offsetY + this.chartHeight);
        textSize(12);
        fill(255, 0, 0); 
        noStroke();  
        for(let i = 0; i < 2.1; i+=0.2){
            let vsh = map(i, 0, 2.1, 0, this.chartHeight);
            text((2.1 - i).toFixed(1), this.offsetX - 20, this.offsetY + vsh);        
        }
        for(let i = 0; i < 150; i+=10){
            let vsw = map(i, 0, 150, 0, this.chartWidth);
            text(i.toFixed(0), this.offsetX + vsw, this.offsetY + this.chartHeight + 20);
        }

    }

    plotData(){
        noStroke();
        fill(0, 0, 255);
        let keys = Object.keys(this.data);
        for(let i = 0; i < keys.length; i++){                        
            let h = this.data[i].height;
            let w = this.data[i].weight;
            let a = this.data[i].age;
            let b = this.data[i].bmi; 
            
            let vh = map(2.1 - h, 0, 2.1, 0, this.chartHeight);
            let vw = map(w, 0, 150, 0, this.chartWidth);
            circle(this.offsetX + vw, this.offsetY + vh, 5);
        }        
    }

}