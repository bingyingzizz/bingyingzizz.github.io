# 逐点交错型 $\implies$ 拉回保楔积
`imp.tu-pullback-wedge` · 推出 · strong 边 · 根 `../`

`def.differential-form` 微分形式 → `prop.pullback-forms` 拉回

$$F^{\ast}\bigl(a\,\mathrm{d}x^{I}\wedge b\,\mathrm{d}x^{J}\bigr) = (a\circ F)(b\circ F)\,\mathrm{d}F^{i_{1}}\wedge\cdots\wedge\mathrm{d}F^{j_{k}} = (F^{\ast}\omega)\wedge(F^{\ast}\eta).$$

**线性与复合**是定义的直接读法：$F^{\ast}$ 逐点就是 $(\mathrm{d}F_{p})^{\ast}$，而 $\mathrm{d}(G\circ F)_{p} = \mathrm{d}G_{F(p)}\circ\mathrm{d}F_{p}$ 给出 $(G\circ F)^{\ast} = F^{\ast}\circ G^{\ast}$。∎
