# 逐点交错型 $\implies$ 拉回保楔积
`imp.tu-pullback-wedge` · 推出 · strong 边 · 根 `../`

`def.differential-form` 微分形式 → `prop.pullback-forms` 拉回

两边都对系数函数线性，故只需对单项式 $\omega = a\,\mathrm{d}x^{I}$、$\eta = b\,\mathrm{d}x^{J}$ 验证，并记 $F = (F^{1},\ldots,F^{n})$。

先看 $1$-形式：$(F^{\ast}\mathrm{d}x^{i})_{p}(v) = \mathrm{d}x^{i}\bigl(\mathrm{d}F_{p}(v)\bigr) = \mathrm{d}F^{i}_{p}(v)$，即

$$F^{\ast}\mathrm{d}x^{i} = \mathrm{d}F^{i} = \sum_{j}\frac{\partial F^{i}}{\partial x^{j}}\ \mathrm{d}x^{j}.$$

**保楔积。** 每点的 $\wedge$ 就是「张量积再交错化」，而交错化只置换变元、线性映射的拉回 $L^{\ast}$ 逐变元作用，两者交换；于是对线性映射 $L$ 有 $L^{\ast}(\alpha\wedge\beta) = L^{\ast}\alpha\wedge L^{\ast}\beta$。取 $L = \mathrm{d}F_{p}$ 并逐点拼接，再用 $F^{\ast}a = a\circ F$ 得

> 续见 proofs/imp.tu-pullback-wedge.2.md
