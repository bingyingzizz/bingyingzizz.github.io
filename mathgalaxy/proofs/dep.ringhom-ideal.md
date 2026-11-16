# 环同态的核是理想
`dep.ringhom-ideal` · 推出 · strong 边 · 根 `../`

`def.ring-hom` 环同态 → `def.ideal` 理想

设 $\varphi : A \to B$ 是环同态。$\varphi(0)=0$ 故 $0\in \ker\varphi$。若 $x, y \in \ker\varphi$，则 $\varphi(x-y) = \varphi(x) - \varphi(y) = 0$；若 $a \in A$，则 $\varphi(ax) = \varphi(a)\varphi(x) = 0$、$\varphi(xa) = \varphi(x)\varphi(a) = 0$。故 $\ker\varphi$ 对减法与双边乘法封闭，即 $A$ 的理想。∎

> 这是判定（核落在理想里），不是定义依赖：环同态的定义不要求先有理想。
