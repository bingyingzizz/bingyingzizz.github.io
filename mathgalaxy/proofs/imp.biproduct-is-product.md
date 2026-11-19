# imp.biproduct-is-product
`imp.biproduct-is-product` · 推出 · strong 边 · 根 `../`

`def.abelian-category` 阿贝尔范畴 + `def.product` 积 / 余积 → `prop.biproduct-is-product` 直和就是积

**证明。** **① 先推出正交性。** 把 $i_{1}p_{1} + i_{2}p_{2} = 1_{M}$ 夹在 $p_{1}$ 与 $i_{2}$ 之间：
$$p_{1}i_{2} = p_{1}(i_{1}p_{1} + i_{2}p_{2})i_{2} = (p_{1}i_{1})(p_{1}i_{2}) + (p_{1}i_{2})(p_{2}i_{2}) = p_{1}i_{2} + p_{1}i_{2},$$
两边在阿贝尔群 $\operatorname{Hom}(M_{2},M_{1})$ 里减去 $p_{1}i_{2}$，得 $p_{1}i_{2} = 0$ ✓；对称地 $p_{2}i_{1} = 0$。合起来就是 $p_{k}i_{l} = \delta_{kl}$ ✓。
**② 直和 $\implies$ 是积。** 给 $f_{k} : X \to M_{k}$，令 $f := i_{1}f_{1} + i_{2}f_{2}$。由 ① 得 $p_{k}f = f_{k}$ ✓。唯一性：若 $h$ 也满足 $p_{k}h = f_{k}$，则
$$h = 1_{M}\,h = (i_{1}p_{1} + i_{2}p_{2})h = i_{1}f_{1} + i_{2}f_{2} = f ✓$$
故 $(M,p_{1},p_{2})$ 是积

> 续见 proofs/imp.biproduct-is-product.2.md
