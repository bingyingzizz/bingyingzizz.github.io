# 范数 $\implies$ 平移不变、齐次、球凸的距离
`imp.fa-norm-metric` · 推出 · strong 边 · 根 `../`

`def.norm` 范数 → `prop.norm-induces-metric` 范数诱导的距离

距离公理：$d(x,y) = 0 \iff \|x - y\| = 0 \iff x = y$；对称与三角不等式由范数第 2、3 条直接给。
平移不变：$d(x+z, y+z) = \|x - y\|$。齐次：$d(\lambda x, \lambda y) = |\lambda|\,\|x - y\|$。
球凸：$\|u - x\|, \|v - x\| \le r \implies \|tu + (1-t)v - x\| \le t\|u-x\| + (1-t)\|v-x\| \le r$。
反方向：若 $d$ 平移不变且齐次，令 $\|x\| := d(x, 0)$，则 $d(x,y) = d(x-y, 0) = \|x-y\|$，且三角不等式由 $d(x,0) \le d(x,-z) + d(-z,0)$ 配合平移不变得到。$\blacksquare$

> 这条把「赋范」的全部几何内容一次摆出来：平移不变 + 齐次 + 球凸。
