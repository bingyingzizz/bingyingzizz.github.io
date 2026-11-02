# 亚纯函数的定义 $\implies$ Mittag-Leffler 定理（只给证明骨架）
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 → `thm.mittag-leffler` Mittag-Leffler 定理

⚠ 这一条只记**证明骨架**，不是逐行完整的证明：完整证明要用 Runge 逼近或 Weierstrass 收敛因子，属于逼近论的内容，这里不展开。

**第一步：先排成一个没有聚点的序列。** 假设里 $\{a_k\}$ 在 $\Omega$ 内没有聚点，把它按 $|a_k|$ 从小到大排好（若序列有限，直接减去有限和即可，没有收敛问题）。

**第二步：造一个「差不多对」的候选。** 取

$$F(z) := \sum_{k=1}^{\infty} P_k\left( \frac{1}{z - a_k} \right).$$

若这个级数在每个紧集上一致收敛，它就直接是答案：在每个 $a_k$ 附近只有 $P_k$ 那一项有极点，其余各项全纯。

> 续见 proofs/imp.mittag-leffler.2.md
