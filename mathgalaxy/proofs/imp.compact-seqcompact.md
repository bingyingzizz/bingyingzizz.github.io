# 紧 $\implies$ 列紧
`imp.compact-seqcompact` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 → `def.sequentially-compact` 列紧

设 $\{x_{n}\}$ 是 $X$ 中的序列。反证：假设它没有收敛的子列。

**① 点集 $\{x_{n} : n \in \mathbb{N}\}$ 是闭的。** 任取 $y$ 不在这个点集中。若 $y$ 是某个 $x_{n}$，那 $y$ 显然不在余集里；以下设 $y \notin \{x_{n}\}$。由于 $\{x_{n}\}$ 没有收敛子列，$\{x_{n}\}$ 中任何子列都不趋于 $y$，于是存在 $\varepsilon > 0$ 使 $B(y, \varepsilon )$ 中只含**有限个** $x_{n}$（否则可以挑出趋于 $y$ 的子列）。删掉这有限多个点，就得到一个含 $y$ 的开球不碰 $\{x_{n}\}$。故余集开，$\{x_{n}\}$ 闭。

**② 每个 $x_{n}$ 有一个只含有限多个 $x_{m}$ 的开邻域。** $x_{n}$ 自己也被排除在子列之外，同上可得。

**③ 造一个开覆盖。** 取

$$\mathcal{U} = \{ U_n : n \in \mathbb{N} \} \cup \{ X \setminus \{x_n : n \in \mathbb{N}\} \}$$

> 续见 proofs/imp.compact-seqcompact.2.md
