# 连通的像与闭包　`prop.connected-image-closure`　·　说明
根 `../`

**证明。** (1) 若 $f(X) = U \sqcup V$ 是两块不交非空开集，则 $X = f^{-1}(U) \sqcup f^{-1}(V)$ 断开 $X$ ✓。
(2) 设 $A \subseteq X$ 连通、$\overline{A} = U \sqcup V$（$U, V$ 在 $\overline{A}$ 中非空开）。则 $A = (A \cap U) \sqcup (A \cap V)$ ✓；由 $A$ 连通，不妨 $A \cap V = \emptyset$，于是 $A \subseteq U$ 且 $V \cap U = \emptyset$ 蕴含 $V$ 在 $\overline{A}$ 中也是闭的 ✓，故 $\overline{A} \subseteq U$，与 $V \ne \emptyset$ 矛盾 ✓。∎
