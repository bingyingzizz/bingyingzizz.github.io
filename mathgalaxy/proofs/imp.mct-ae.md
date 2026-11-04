# 逐点单调收敛 $\implies$ 几乎处处单调收敛
`imp.mct-ae` · 推出 · strong 边 · 根 `../`

`thm.mct` 单调收敛定理 → `cor.mct-ae` 单调收敛定理（几乎处处版本）

设 $f_{n} \uparrow f$ 在 $N$ 之外处处成立，$\mu(N) = 0$。

把 $f_{n}$ 与 $f$ 在 $N$ 上改成 $0$（得到 $g_{n}, g$）：逐点单调收敛处处成立，由 `thm.mct` 得 $\int g = \lim \int g_{n}$。

零集上改动不影响积分（$\int = \int g$ 且 $\int f_{n} = \int g_{n}$），于是 $\int f = \lim \int f_{n}$。∎

⚠ **修的是一个层号倒置**：「推论」`cor.mct-ae` 原来只有 L17，比原定理 `thm.mct`（L18）还浅 —— 因为这条边一直不存在。接上之后它回到 L19。
