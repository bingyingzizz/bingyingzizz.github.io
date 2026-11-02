# 亚纯函数的定义 $\implies$ Mittag-Leffler 定理（只给证明骨架）
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 → `thm.mittag-leffler` Mittag-Leffler 定理

**第三步：修正发散。** 一般地级数并不收敛。取一列紧集 $K_n \nearrow \Omega$，对每个 $k$ 在 $a_k$ 处把 $P_k$ 减去它的 Taylor 多项式 $T_k$（次数足够高），使得

$$\left| P_k\left( \frac{1}{z - a_k} \right) - T_k(z) \right| \le 2^{-k} \qquad (z \in K_k).$$

这样的 $T_k$ 存在，因为 $P_k$ 在 $a_k$ 之外全纯，可以在 $K_k$ 上用 Taylor 展开逼近。

**第四步：收敛与主部。** 修正后的级数 $\sum_k (P_k - T_k)$ 在每个 $K_n$ 上一致收敛（从第 $n$ 项起每项都 $\le 2^{-k}$）。而减去的 $T_k$ 在 $a_k$ 处全纯、不影响主部，故极限函数在 $a_k$ 处的主部仍是 $P_k$。

> 续见 proofs/imp.mittag-leffler.3.md
