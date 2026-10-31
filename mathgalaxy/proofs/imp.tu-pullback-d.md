# 链式法则 $+$ $\mathrm{d}^{2}=0$ $\implies$ $F^{\ast}$ 与 $\mathrm{d}$ 交换
`imp.tu-pullback-d` · 推出 · strong 边 · 根 `../`

`def.exterior-derivative` 外微分 → `prop.pullback-forms` 拉回

只需验证 $\omega = f\,\mathrm{d}x^{I}$，再用线性拼起来。由已证的保楔积与 $F^{\ast}f = f\circ F$：

$$F^{\ast}(\mathrm{d}\omega) = F^{\ast}\Bigl(\sum_{j}\partial_{j}f\ \mathrm{d}x^{j}\wedge\mathrm{d}x^{I}\Bigr) = \sum_{j}(\partial_{j}f\circ F)\ \mathrm{d}F^{j}\wedge\mathrm{d}F^{I}.$$

另一方面

$$\mathrm{d}(F^{\ast}\omega) = \mathrm{d}\bigl((f\circ F)\,\mathrm{d}F^{I}\bigr) = \mathrm{d}(f\circ F)\wedge\mathrm{d}F^{I}+(f\circ F)\,\mathrm{d}\bigl(\mathrm{d}F^{I}\bigr).$$

第二项为零：每个 $\mathrm{d}F^{j}$ 都是恰当形式（$\mathrm{d}F^{j} = \mathrm{d}(F^{j})$），而 $\mathrm{d}^{2} = 0$，故 $\mathrm{d}(\mathrm{d}F^{I}) = 0$。第一项用链式法则

> 续见 proofs/imp.tu-pullback-d.2.md
