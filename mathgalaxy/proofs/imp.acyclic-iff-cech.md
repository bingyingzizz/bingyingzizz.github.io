# imp.acyclic-iff-cech
`imp.acyclic-iff-cech` · 推出 · strong 边 · 根 `../`

`def.acyclic-sheaf` 无环层 + `def.cech-cohomology` Čech 上同调 + `thm.cartan-leray` Cartan–Leray 谱序列 → `prop.acyclic-iff-cech` 无环 ⟺ Čech 上同调为零

**证明。** 关键的中间物是**预层的谱序列**（由「Čech 到上同调」那条沿覆盖取余极限、再用滤过余极限正合得到）
$$E^{p,q}_{2} := \check{H}^{p}\bigl(H^{q}(M)\bigr) \;\Longrightarrow\; H^{p+q}(M).$$
- **$\implies$ 方向**：若 $M$ 无环，则 $H^{q}(M) = 0$（$q \ne 0$），第一页只剩 $q = 0$ 那一行，谱序列立刻退化，给出 $\check{H}^{n}(M) = 0$（$n \ne 0$）。
- **$\Longleftarrow$ 方向**：对 $n$ 归纳，证「$0 < p + q \le n$ 时 $E^{p,q}_{2} = 0$」。

设 $0 < q \le n$：由归纳假设（$H^{q}(M)$ 在更低的总次数上）得 $H^{q}(M) = 0$，于是这一整个 $q$ 行是 $0$；

> 续见 proofs/imp.acyclic-iff-cech.2.md
