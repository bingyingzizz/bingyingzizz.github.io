# imp.quintic-unsolvable
`imp.quintic-unsolvable` · 推出 · strong 边 · 根 `../`

`thm.radical-solvable` 根式可解 与 伽罗瓦群可解 + `prop.sn-solvable` 对称群的可解性 + `def.galois-group` 伽罗瓦群 + `def.irreducible-poly` 不可约多项式 → `thm.quintic-unsolvable` 五次方程没有根式解

**第四步：$\langle \sigma, \tau \rangle = S_{5}$**。把 $\sigma$ 写成 $(0\,1\,2\,3\,4)$。换位 $\tau = (a\,b)$ 的两个点在 5-循环上的距离只可能是 $1$ 或 $2$（距离 $d$ 与 $5-d$ 等价）。若距离为 $1$，$\sigma^{k}\tau\sigma^{-k}$ 给出全部相邻换位 $(i\,i+1)$，它们生成 $S_{5}$。若距离为 $2$，不妨取 $\tau = (0\,2)$：共轭给出 $(0\,2), (1\,3), (2\,4), (3\,0), (4\,1)$。由 $(0\,2)$ 与 $(2\,4)$ 得乘积 $(0\,4\,2)$，于是 $\{0, 2, 4\}$ 上的 $S_{3}$（含换位 $(0\,2)$）落在 $G$ 里；$S_{3}$ 与 5-循环合起来使 $|G|$ 被 $6$ 与 $5$ 整除，故 $30 \mid |G|$。若 $|G|=30$，则 $G$ 是 $S_{5}$ 的指数 $4$ 子群；

> 续见 proofs/imp.quintic-unsolvable.7.md
