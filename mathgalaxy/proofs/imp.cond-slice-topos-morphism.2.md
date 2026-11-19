# imp.cond-slice-topos-morphism
`imp.cond-slice-topos-morphism` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.sheaf` 层 + `def.fibered-product` 纤维积 / 纤维余积 + `def.condensed-set` 凝聚态集 → `prop.cond-slice-topos-morphism` Cond/X 到开集拓扑斯的态射

顺像 $\varinjlim_{U \subseteq X,\ s \in F(U)} \underline{U}$ 取的是**滤过**余极限（开集沿含入滤过），在 $\mathrm{Cond}$ 里存在。
**逆像左正合**：$\varinjlim$ 在 $\mathrm{Cond}$ 里正合（AB5）。
**伴随**：逐项算
$$\operatorname{Hom}_{/X}\Bigl(\varinjlim_{U, s} \underline{U},\ Y\Bigr) = \varinjlim_{U, s} \operatorname{Hom}_{/X}(\underline{U}, Y) = \operatorname{Hom}(F, Y),$$
第一式是余极限的泛性质，第二式就是把「从 $F$ 到 $Y$ 的映射」按 $F$ 的定义写成相容族 $\{F(U) \to \operatorname{Hom}_{/X}(\underline{U}, Y)\}$ —— 两者是同一件事。

> 续见 proofs/imp.cond-slice-topos-morphism.3.md
