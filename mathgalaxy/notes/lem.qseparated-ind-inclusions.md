# 拟分离即含入的滤过余极限　`lem.qseparated-ind-inclusions`　·　说明
根 `../`

⚠️ **不要读成 $\operatorname{Ind}(\mathbf{CHaus}) \cong \mathrm{Cond}$。** 整块 $\operatorname{Ind}(\mathbf{CHaus})$ 比凝聚态集**大**：一般凝聚态集的紧块过渡映射只是映射、不是含入，所以只有「含入过渡」那一部分才对得上 qcqs 的对象。

**为什么这条重要。** 它把「拟分离」这个抽象的有限性条件换成了一个**可操作**的写法：$X$ 是一串越来越大的紧 Hausdorff 块 $S_{1} \hookrightarrow S_{2} \hookrightarrow \cdots$ 的余极限。$\operatorname{Ind}$-对象这套语言正是为「滤过余极限拼出来的东西」准备的，于是 $\mathrm{Cond}$ 的很多计算可以逐块做再取余极限。

⭐ 这条也是后面「层上同调用紧块算」那一路技术的起点：先在紧 Hausdorff 块上算，再沿滤过余极限抬上去（滤过余极限正合）。
