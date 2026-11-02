# 映射锥 $\implies$ 三角可旋转、可延拓
`imp.triangle-rotation` · 推出 · strong 边 · 根 `../`

`def.mapping-cone` 映射锥 + `def.distinguished-triangle` 导出三角 → `prop.triangle-rotation` 三角的旋转与延拓

**延拓。** 给定 $f : K \to L$，直接取三角 $K \to L \to M(f) \to K[1]$ 即得第 3 条。

给定三角态射的左边两步 $u : K' \to K''$、$v : L' \to L''$，先把 $f'$ 与 $f''$ 都取成映射锥的形式。要造 $w$，令其矩阵形式为

$$w := \begin{pmatrix} s^{n+1} & v^{n} \end{pmatrix} : K'^{n+1} \oplus L'^{n} \longrightarrow K''^{n+1} \oplus L''^{n}$$

其中 $s$ 是 $v \circ f' - f'' \circ u$ 的一个同伦（它零伦来自三角的交换性）。逐项验证 $w \circ d = d \circ w$ 即可，这一步用到同伦方程本身。∎

> 续见 proofs/imp.triangle-rotation.3.md
