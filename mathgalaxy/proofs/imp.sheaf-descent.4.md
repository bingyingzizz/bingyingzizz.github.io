# 预拓扑下的层 $\iff$ 正合列
`imp.sheaf-descent` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.pretopology` 预拓扑 + `def.sieve` 筛 → `thm.sheaf-descent` 层的下降条件

⚠️ 细看上面 $alpha, \beta$ 的定义：$\operatorname{Hom}(R, F)$ 里的相容性条件要通过 $R$ 的**态射结构**（两个投影 $X_{i} \times_{X} X_{j} \rightrightarrows X_{i}$）才能写下来，这正是为什么必须用**纤维积**而不是「交」。

> 这条把「层」这个抽象定义落到可以逐项验证的形状：**一串截面、两个限制映射、取核**。实际验层时走的都是这一条。
