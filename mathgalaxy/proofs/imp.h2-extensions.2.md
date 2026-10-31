# 群扩张 + $2$-上圈 $\implies$ $H^{2}$ 分类扩张
`imp.h2-extensions` · 推出 · strong 边 · 根 `../`

`def.group-extension` 群扩张 + `def.cocycle-2` 二维上圈与上边界 + `def.group-cohomology` 群上同调 → `thm.h2-group-extensions` 二维上同调分类群扩张

$$i\bigl(c(g_{1}, g_{2})\bigr)\, i\bigl(c(g_{1}g_{2}, g_{3})\bigr) = i\bigl(c(g_{1}, g_{2}g_{3})\bigr)\, \sigma(g_{1})\, i\bigl(c(g_{2}, g_{3})\bigr)\, \sigma(g_{1})^{-1}.$$

右端用共轭恒等式 $\sigma(g_{1})\, i(a)\, \sigma(g_{1})^{-1} = i(g_{1}\cdot a)$（$G$-模结构的定义），再用 $i$ 单、$A$ 交换把因子挪到可加号后，得到

$$c(g_{1}, g_{2}) + c(g_{1}g_{2}, g_{3}) = g_{1}\cdot c(g_{2}, g_{3}) + c(g_{1}, g_{2}g_{3}),$$

即 $c \in Z^{2}$。

> 续见 proofs/imp.h2-extensions.3.md
