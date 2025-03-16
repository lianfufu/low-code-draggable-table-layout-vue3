
export function useResizeDomColumnSize(event:any,leftDomWidth:any, rightDomWidth:any,leftRange:number[]=[50,300],rightRange:number[]=[50,300]) {
    let isResizingColumn=false;
    let initialX=0;
    function startResizingColumn() {
        event.stopPropagation(); // 阻止事件冒泡到draggable组件
        event.preventDefault();  // 阻止默认行为，以防万一
        isResizingColumn = true;
        initialX = event.clientX;
        // console.log(event);
        console.log(initialX,"initialX");
        // 保存当前列的初始宽度，用于后续计算
        // this.initialColumnWidth = this.columnWidths[columnIndex];
        document.addEventListener('mousemove', resizeColumn);
        document.addEventListener('mouseup', stopResizingColumn);
    }
    function resizeColumn(event:any) {
        console.log(event,"没进来纵向调整");
        if (!isResizingColumn) return;
        const deltaX = event.clientX - initialX;
        // 调整列宽，确保最小宽度

        const newLeftWidth=Math.max(leftRange[0], leftDomWidth.value??leftDomWidth.leftMenuPanelWidth + deltaX);
        leftDomWidth.value?leftDomWidth.value = newLeftWidth>leftRange[1]?leftRange[1]:newLeftWidth
            :leftDomWidth.leftMenuPanelWidth = newLeftWidth>leftRange[1]?leftRange[1]:newLeftWidth;
        // if(leftDomWidth.value===300){
        //     initialX = event.clientX;
        //     return;
        // }

        if(rightDomWidth.value!==undefined&&!Number.isNaN(rightDomWidth.value)){
            const newRightWidth=Math.max(rightRange[0], rightDomWidth.value - deltaX);
            rightDomWidth.value = newRightWidth>rightRange[1]?rightRange[1]:newRightWidth;
        }else if(rightDomWidth.value===undefined&&rightDomWidth.mainCanvasWidth){
            console.log("进来了这里的逻辑了");
            //const newRightWidth=Math.max(rightRange[0], rightDomWidth.mainCanvasWidth - deltaX);
            //console.log("执行前的结果",rightDomWidth.mainCanvasWidth);
            // rightDomWidth.mainCanvasWidth = newRightWidth>rightRange[1]?rightRange[1]:newRightWidth;

            if(leftDomWidth.leftMenuPanelWidth<leftRange[1]&&leftDomWidth.leftMenuPanelWidth>leftRange[0]){
                rightDomWidth.mainCanvasWidth = rightDomWidth.mainCanvasWidth - deltaX;
            }
            console.log("执行后的结果",rightDomWidth.mainCanvasWidth);
        }
        initialX = event.clientX;

        // const newWidth = getRealWidthOfColumn(props.columnWidths[resizingColumnIndex.value]) + deltaX;
        // // console.log(deltaX,newWidth,"最新宽度");
        // // 如果是非最后一列，需要调整相邻列的宽度
        // if (resizingColumnIndex.value < props.columnWidths.length - 1) {
        //     const nextColumnWidth = getRealWidthOfColumn(props.columnWidths[resizingColumnIndex.value + 1]) - deltaX;
        //
        //     console.log(deltaX,newWidth,nextColumnWidth);
        //
        //     if(nextColumnWidth<0||newWidth<0){
        //         initialX.value = event.clientX;
        //         return;
        //     }
        //
        //     props.columnWidths[resizingColumnIndex.value]=getPercentColumnWidth(newWidth);
        //     props.columnWidths[resizingColumnIndex.value + 1]=getPercentColumnWidth(nextColumnWidth);
        //
        //     // // 确保相邻列的最小宽度
        //     // if (nextColumnWidth >= 50) {
        //     //   this.$set(this.columnWidths, this.resizingColumnIndex, this.getPercentColumnWidth(newWidth));
        //     //   this.$set(this.columnWidths, this.resizingColumnIndex + 1, this.getPercentColumnWidth(nextColumnWidth));
        //     // }
        // } else {
        //     // 如果是最后一列，只调整当前列
        //     props.columnWidths[resizingColumnIndex.value]=getPercentColumnWidth(newWidth);
        // }
        // initialX.value = event.clientX;
    }
    function stopResizingColumn() {
        isResizingColumn = false;
        document.removeEventListener('mousemove', resizeColumn);
        document.removeEventListener('mouseup', stopResizingColumn);
    }

    //调用函数
    startResizingColumn();
}

export function useResizeDomRowSize(event:any,leftDomWidth:any, rightDomWidth:any,leftRange:number[]=[50,300],rightRange:number[]=[50,300]) {
    let isResizingColumn=false;
    let initialY=0;
    function startResizingColumn() {
        event.stopPropagation(); // 阻止事件冒泡到draggable组件
        event.preventDefault();  // 阻止默认行为，以防万一
        isResizingColumn = true;
        initialY = event.clientY;
        // console.log(event);
        console.log(initialY,"initialY");
        // 保存当前列的初始宽度，用于后续计算
        // this.initialColumnWidth = this.columnWidths[columnIndex];
        document.addEventListener('mousemove', resizeColumn);
        document.addEventListener('mouseup', stopResizingColumn);
    }
    function resizeColumn(event:any) {
        console.log(event,"没进来纵向调整");
        if (!isResizingColumn) return;
        const deltaY = event.clientY - initialY;
        // 调整列宽，确保最小宽度

        const newLeftWidth=Math.max(leftRange[0], leftDomWidth.value + deltaY);
        leftDomWidth.value = newLeftWidth>leftRange[1]?leftRange[1]:newLeftWidth;
        // if(leftDomWidth.value===300){
        //     initialX = event.clientX;
        //     return;
        // }

        if(!Number.isNaN(rightDomWidth.value)){
            const newRightWidth=Math.max(rightRange[0], rightDomWidth.value - deltaY);
            rightDomWidth.value = newRightWidth>rightRange[1]?rightRange[1]:newRightWidth;
        }
        initialY = event.clientY;

        // const newWidth = getRealWidthOfColumn(props.columnWidths[resizingColumnIndex.value]) + deltaX;
        // // console.log(deltaX,newWidth,"最新宽度");
        // // 如果是非最后一列，需要调整相邻列的宽度
        // if (resizingColumnIndex.value < props.columnWidths.length - 1) {
        //     const nextColumnWidth = getRealWidthOfColumn(props.columnWidths[resizingColumnIndex.value + 1]) - deltaX;
        //
        //     console.log(deltaX,newWidth,nextColumnWidth);
        //
        //     if(nextColumnWidth<0||newWidth<0){
        //         initialX.value = event.clientX;
        //         return;
        //     }
        //
        //     props.columnWidths[resizingColumnIndex.value]=getPercentColumnWidth(newWidth);
        //     props.columnWidths[resizingColumnIndex.value + 1]=getPercentColumnWidth(nextColumnWidth);
        //
        //     // // 确保相邻列的最小宽度
        //     // if (nextColumnWidth >= 50) {
        //     //   this.$set(this.columnWidths, this.resizingColumnIndex, this.getPercentColumnWidth(newWidth));
        //     //   this.$set(this.columnWidths, this.resizingColumnIndex + 1, this.getPercentColumnWidth(nextColumnWidth));
        //     // }
        // } else {
        //     // 如果是最后一列，只调整当前列
        //     props.columnWidths[resizingColumnIndex.value]=getPercentColumnWidth(newWidth);
        // }
        // initialX.value = event.clientX;
    }
    function stopResizingColumn() {
        isResizingColumn = false;
        document.removeEventListener('mousemove', resizeColumn);
        document.removeEventListener('mouseup', stopResizingColumn);
    }

    //调用函数
    startResizingColumn();
}