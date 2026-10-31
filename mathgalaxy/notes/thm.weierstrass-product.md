# Weierstrass 乘积定理　`thm.weierstrass-product`　·　说明
根 `../`

**证明（骨架）**：

**第一步：选 $p_{n}$。** 由初等因子的估计 $|1 - E_{p}(z)| \le |z|^{p+1}$（$|z| \le 1$），只要 $\sum_{n} |z/a_{n}|^{p_{n}+1}$ 在每个 $|z| \le R$ 上收敛，乘积就内闭一致收敛。因为 $a_{n} \to \infty$，对每个 $n$ 取 $p_{n}$ 使 $\sum |a_{n}|^{-(p_{n}+1)} < \infty$ 总做得到（例如取 $p_{n} = n$）。

**第二步：乘积是整函数。** 内闭一致收敛的乘积，在每个紧集上只有有限个因子可能为零，其余部分一致收敛到无零点全纯函数（用 `thm.weierstrass-convergence` 的乘积版），故极限全纯。

**第三步：零点恰好是 $\{a_{n}\}$。** 每个 $E_{p_{n}}(z/a_{n})$ 只在 $z = a_{n}$ 处为零，次数等于 $a_{n}$ 在序列里出现的次数。∎

⭐ **它是「整函数 = 零点 $\times$ 无零点」的分解**。和 Mittag-Leffler（`thm.mittag-leffler`）对照着看最清楚：一个管**零点**（乘法），一个管**主部/极点**（加法）。

> 续见 notes/thm.weierstrass-product.2.md
