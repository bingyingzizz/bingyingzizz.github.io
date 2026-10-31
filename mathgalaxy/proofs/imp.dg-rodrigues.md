# 形状算子 $\implies$ Rodrigues 定理
`imp.dg-rodrigues` · 推出 · strong 边 · 根 `../`

`def.weingarten-map` Weingarten 变换 + `def.principal-curvature` 主曲率 → `thm.rodrigues` Rodrigues 定理

记 $u := \mathrm{d}r(v) \ne 0$。$v$ 是主方向，按定义就是 $u$ 是 $W$ 的特征向量：$W(u) = k\,u$，其中 $k$ 是对应的主曲率。由 $W = -\mathrm{d}n$，$W(u) = -\mathrm{d}n(v)$，于是 $W(u) = k\,u \iff \mathrm{d}n(v) = -k\,\mathrm{d}r(v)$，即 (1)$\iff$(2)。

(2)$\iff$(3)：$k_{n}$ 在单位向量上取驻值 $\iff$ 存在 $k$ 使 $II(v,\cdot) = k\,I(v,\cdot)$（Lagrange 乘子）$\iff$ $\langle W(\mathrm{d}r(v)), \mathrm{d}r(\cdot)\rangle = k\langle \mathrm{d}r(v), \mathrm{d}r(\cdot)\rangle$ $\iff$ $W(u) = k\,u$。而这时 $k_{n}(v) = II(v,v)/I(v,v) = k$，故驻值恰是对应主曲率。∎
