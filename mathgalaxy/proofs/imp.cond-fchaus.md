# $\mathrm{Cond} \simeq \widehat{\mathbf{FCHaus}}$
`imp.cond-fchaus` · 推出 · strong 边 · 根 `../`

`prop.fchaus-sheaf` FCHaus 上层的判据 + `prop.fchaus-pretopology` FCHaus 上的预拓扑 + `def.free-presentation` 自由表示 → `thm.cond-equiv-fchaus` Cond 即 FCHaus 上的层

**（限制）** 设 $X$ 是 $\mathbf{CHaus}$ 上的层，把它限制到 $\mathbf{FCHaus}$ 上。$\mathbf{FCHaus}$ 上的覆盖更少（只有有限不交并），层的条件只会更容易满足，所以限制仍是层。∎

**（延拓）** 设 $X$ 是 $\mathbf{FCHaus}$ 上的层。对 $S \in \mathbf{CHaus}$ 定义

$$X(S) := \varinjlim_{F \to S} X(F)$$

指标跑在「自由紧 Hausdorff 空间到 $S$ 的映射」上（按加细取滤过余极限）。

> 续见 proofs/imp.cond-fchaus.2.md
