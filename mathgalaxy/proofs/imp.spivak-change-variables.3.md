# 保向不变性 + 单位分解 $\implies$ 流形上的换元公式
`imp.spivak-change-variables` · 推出 · strong 边 · 根 `../`

`def.integral-form` 形式的积分 + `prop.paracompact-partition-unity` 仿紧性与单位分解 → `thm.change-of-variables-manifold` 流形上的换元公式

中间的 $\pm$ 只在 $\det<0$ 时出现；最后一步就是 $\mathbb{R}^{n}$ 上的换元公式（它自带 $|\det|$）。$g$ 保向等价于 $\det>0$ 处处成立（$U$ 连通时），此时取 $+$。

**（4）拼回去。** 逐项相加，再用单位分解「和为一」把系数约掉，得 $\int_{M}f^{\ast}\omega = \varepsilon\int_{N}\omega$。∎

⭐ 绝对值的有无就是「有没有定向」：$n$-形式自带符号，故换元带 $\det$；密度不带符号，故换元带 $|\det|$。两条公式的差别全在这里。
