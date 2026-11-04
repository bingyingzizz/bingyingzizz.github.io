# 多重线性 + 交错 $\implies$ 行列式的存在唯一性
`imp.det-exists-unique` · 推出 · strong 边 · 根 `../`

`def.multilinear-form` 多重线性型 + `def.alternating-form` 交错型 → `thm.det-exists-unique` 行列式的存在唯一性

⭐ 两种证法分工不同：Leibniz 那一路给出**显式公式**（能算），外代数这一路给出**为什么非这样不可**（$\bigwedge^{n}V$ 一维这件事本身就说明了）。

⚠ 这一路依赖外幂（\`def.exterior-power\`）：本图那条链是 \`imp.det-as-exterior\`，它从本条出发讲外积 —— 所以这里只记思路，不声称「不依赖行列式」。

> **唯一性先证、存在性后验**：这是「用泛性质定义对象」的标准套路 —— 先把任何满足条件的对象都逼成一个显式公式，再把那个公式拿回来验证它确实满足条件。
