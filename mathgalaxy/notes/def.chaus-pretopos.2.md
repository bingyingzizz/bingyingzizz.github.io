# 紧 Hausdorff 空间构成预拓扑斯　`def.chaus-pretopos`　·　说明
根 `../`

**证明。** 关键在于「哪些 $\mathbf{Top}$ 里的余极限**同时也是** $\mathbf{CHaus}$ 里的余极限」：
- 四条性质在 $\mathbf{Set}$（拓扑斯）里都成立；而 $\mathbf{CHaus}$ 的极限在 $\mathbf{Top}$ 里逐点算（$\mathbf{CHaus}$ 对极限封闭），所以涉及极限的部分直接从 $\mathbf{Set}$ 继承；
- 一个**本身还是紧 Hausdorff** 的 $\mathbf{Top}$ 余极限，就是 $\mathbf{CHaus}$ 里的余极限 —— **有限余积**、**满射的余等化子**、**闭等价关系的余等化子**都属于这一类；
- 于是：有限余积不交（先在 $\mathbf{Set}$ 里不交，再注意到那个余积本身紧 Hausdorff）、满射万有（拉回仍是满射，仍在紧 Hausdorff 里）、闭等价关系有效（商对象紧 Hausdorff）；
- 第 4 条：紧 Hausdorff 空间之间的**连续满射是商映射** —— 这正是「满 $\implies$ 正则」。∎

第 2、3 条也可以从 $\mathbf{Set}$ 继承：不交性、万有性、有效性都是「逐点」的性质，而 $\mathbf{CHaus}$ 里的构造逐点继承集合。
