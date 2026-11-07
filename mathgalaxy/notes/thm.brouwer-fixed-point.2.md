# Brouwer 不动点定理（圆盘）　`thm.brouwer-fixed-point`　·　说明
根 `../`

所以 $r : \overline{\mathbb{D}} \to S^{1}$ 是一个连续收缩（$r|_{S^{1}} = \operatorname{id}$），与 `thm.no-retraction-disk` 矛盾。故 $f$ 必有不动点。∎

**为什么不能只用复分析**：上面的 $r$ 只用到 $f$ 连续。真正的拓扑输入是 $\pi_{1}(S^{1}) \cong \mathbb{Z}$：`thm.no-retraction-disk` 的证明是函子性一行 —— 若有收缩 $r$，则 $r_{*} \circ i_{*} = \operatorname{id}_{\mathbb{Z}}$ 会穿过 $\pi_{1}(\overline{\mathbb{D}}) = 1$。

**全纯情形的另一条路（Rouché）**：若 $f$ 在 $\mathbb{D}$ 上全纯、连续到边界、且 $|f| \le 1$，则在 $|z| = 1$ 上 $|f(z) - z| \ge |z| - |f(z)| \ge 0$，且等号只在 $f(z) = z$ 时出现（那已是不动点）；否则 $f - z$ 在边界无零点。由 `thm.rouche` 比较 $f - z$ 与 $-z$（$|-z| = 1 > |f|$），后者在 $\mathbb{D}$ 内恰有一个零点，故 $f - z$ 也恰有一个零点。这条只覆盖全纯情形。

> 续见 notes/thm.brouwer-fixed-point.3.md
