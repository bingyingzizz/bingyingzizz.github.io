# Sylow 定理推出 Lagrange 定理
`imp.derived-lagrange-from-sylow` · 推出 · strong 边 · 根 `../`

`thm.sylow` Sylow 定理 → `thm.lagrange` Lagrange 定理

设 $G$ 有限、$H \le G$，记 $v_{p}$ 为素数 $p$ 在该整数里的指数。只要证

$$v_{p}(|H|) \le v_{p}(|G|) \qquad \text{对每个素数 } p,$$

因为 $\mathbb{Z}$ 里逐素数的指数比较就是整除。

**固定 $p$，令 $b := v_{p}(|H|)$。** 把 Sylow 定理 (1)（存在性）用在有限群 $H$ 上：$H$ 有 $p^{b}$ 阶子群 $Q$。$Q$ 同时也是 $G$ 的 $p$-子群。

**再用 (2)。** Sylow (2) 说任何 $p$-子群都含在某个 Sylow $p$-子群之中，所以 $Q \subseteq P$，其中 $P$ 是 $G$ 的一个 Sylow $p$-子群。由 (1) 与 (2) 的共轭性，$G$ 的所有 Sylow $p$-子群同阶，且阶为 $p^{v_{p}(|G|)}$。于是

$$p^{b} = |Q| \le |P| = p^{v_{p}(|G|)},$$

> 续见 proofs/imp.derived-lagrange-from-sylow.2.md
