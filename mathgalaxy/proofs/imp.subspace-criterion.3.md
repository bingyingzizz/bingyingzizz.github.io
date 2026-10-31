# 子空间的定义 $\implies$ 两条判据与生成
`imp.subspace-criterion` · 推出 · strong 边 · 根 `../`

`def.subspace` 子空间 → `prop.subspace-criterion` 子空间判据

1. $\mathcal{U} \ne \emptyset$（$V \in \mathcal{U}$），且任意多个子空间之交仍是子空间（三条逐条验证），故 $U_0$ 是子空间且 $U_0 \supseteq S$。
2. 若 $U \supseteq S$ 是子空间，则 $U \in \mathcal{U}$，故 $U_0 \subseteq U$ —— 所以 $U_0$ 是**最小**的。
3. $U_0$ 含 $S$ 中元素的**有限**线性组合：对每个这样的组合闭包验证一遍（对组合的长度归纳），可知全体有限线性组合构成一个含 $S$ 的子空间 $W$；由最小性 $U_0 \subseteq W$；又每个 $U \in \mathcal{U}$ 都含 $W$（子空间对有限组合封闭），故 $W \subseteq U_0$。两者相等。∎

> 第 3 步是「生成 = 有限组合全体」这句话的全部内容：**「最小」与「有限组合」是同一件事**，一个从上面（取交）说、一个从下面（构造）说。
