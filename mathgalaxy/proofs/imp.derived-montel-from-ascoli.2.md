# Arzelà–Ascoli 在全纯函数族上就是 Montel 定理
`imp.derived-montel-from-ascoli` · 推出 · strong 边 · 根 `../`

`thm.arzela-ascoli` Arzelà–Ascoli 定理 + `thm.cauchy-inequality` Cauchy 不等式 → `thm.montel` Montel 定理

中值不等式遂给 $|f(x) - f(y)| \le (2M/\rho)\,|x - y|$，$\delta = \varepsilon \rho/(2M)$ 与 $f$ 无关。

**② 用 Arzelà–Ascoli。** $K$ 是紧距离空间，对上式那族 $\{ f_{n}|_{K} \}$ 用 Arzelà–Ascoli：存在子列在 $K$ 上一致收敛。

**③ 对角化到内闭一致收敛。** 取穷尽 $\Omega$ 的紧集列 $K_{1} \subset \subset K_{2} \subset \subset \cdots$（$\bigcup K_{j} = \Omega$，每个 $K_{j}$ 含于下一个的内部）。

第 ② 步在 $K_{1}$ 上抽出子列，在该子列里对 $K_{2}$ 再抽，依此类推；

> 续见 proofs/imp.derived-montel-from-ascoli.3.md
