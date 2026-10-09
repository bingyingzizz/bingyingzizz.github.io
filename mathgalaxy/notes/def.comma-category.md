# 逗号范畴　`def.comma-category`　·　说明
根 `../`

**读法**：$F \downarrow G$ 把所有「从 $F$ 的世界伸一条箭头到 $G$ 的世界」的方式组织成一个范畴。**对象是箭头本身**（连同它们两端的来源），态射是让箭头之间能互相比较的那一对态射。

**记号**：$F \downarrow G$ 里的符号就是「逗号」，所以叫逗号范畴；有的书写 $(F \downarrow G)$ 或 $(F/G)$。

⭐ **为什么它到处出现**：泛性质常常是「某个逗号范畴里的**终/始对象**」。



- $X \downarrow \mathrm{id}_{\mathcal{C}}$ 是**切片** $\mathcal{C}/X$；
- 预层的**元素范畴** $\int F$ 就是 $\mathbf{1} \downarrow F$（把预层看成函子 $\mathcal{C}^{\mathrm{op}} \to \mathbf{Set}$）；
- 伴随的**单位**定义成 $\mathrm{id} \downarrow G$（或 $F \downarrow \mathrm{id}$）里的始对象。

判别一个东西是不是逗号范畴，就看它「对象是不是箭头、态射是不是交换方块」。
