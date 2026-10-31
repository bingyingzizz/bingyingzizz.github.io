# 链式法则 $+$ $\mathrm{d}^{2}=0$ $\implies$ $F^{\ast}$ 与 $\mathrm{d}$ 交换
`imp.tu-pullback-d` · 推出 · strong 边 · 根 `../`

`def.exterior-derivative` 外微分 → `prop.pullback-forms` 拉回

$$\mathrm{d}(f\circ F) = \sum_{j}(\partial_{j}f\circ F)\,\mathrm{d}F^{j} ,$$

代回即与上式相同（注意 $\mathrm{d}F^{I} = \mathrm{d}F^{i_{1}}\wedge\cdots\wedge\mathrm{d}F^{i_{k}}$ 与 $F^{\ast}\mathrm{d}x^{I}$ 是同一个东西）。∎

⭐ 唯一的实质内容是**链式法则 + $\mathrm{d}^{2}=0$** 这两条；所有「$\mathrm{d}$ 与坐标无关」的说法最终都归结到这里。
