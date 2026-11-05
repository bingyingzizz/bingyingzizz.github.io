# 亚纯函数的定义 $\implies$ Mittag-Leffler 定理（只给证明骨架）
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 → `thm.mittag-leffler` Mittag-Leffler 定理

**第二步：造一个「差不多对」的候选。** 取

$$F(z) := \sum_{k=1}^{\infty} P_k\left( \frac{1}{z - a_k} \right).$$

若这个级数在每个紧集上一致收敛，它就直接是答案：在每个 $a_k$ 附近只有 $P_k$ 那一项有极点，其余各项全纯。

**第三步：修正发散。** 一般地级数并不收敛。取一列紧集 $K_n \nearrow \Omega$，对每个 $k$ 减去一个**在 $\Omega$ 上全纯**的修正项 $T_{k}$（取成极点在 $\hat{\mathbb{C}}\setminus\Omega$ 里的有理函数），使得

> 续见 proofs/imp.mittag-leffler.4.md
