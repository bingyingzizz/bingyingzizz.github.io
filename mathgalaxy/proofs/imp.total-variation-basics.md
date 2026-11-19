# imp.total-variation-basics
`imp.total-variation-basics` · 推出 · strong 边 · 根 `../`

`def.measure` 测度 + `def.signed-measure` 符号测度 + `def.complex-measure` 复测度 + `thm.simple-approximation` 简单函数逼近 → `prop.total-variation-basics` 全变差的基本性质

**证明。** 记 $|\nu|(E) := \sup\bigl\{\sum_{j}|\nu(E_{j})| : E = \bigsqcup_{j} E_{j} \text{ 可数划分} \bigr\}$。
**(a)** 对任意划分，由三角不等式
$$|\nu(E)| = \Bigl|\sum_{j}\nu(E_{j})\Bigr| \le \sum_{j}|\nu(E_{j})|,$$
对一切划分取上确界得 $|\nu(E)| \le |\nu|(E)$ ✓。
**(b)** 设 $d\nu = f\,\mathrm{d}\mu$。
- **上界**：对任意划分
$$\sum_{j}|\nu(E_{j})| = \sum_{j}\Bigl|\int_{E_{j}} f\,\mathrm{d}\mu\Bigr| \le \sum_{j}\int_{E_{j}}|f|\,\mathrm{d}\mu = \int_{E}|f|\,\mathrm{d}\mu,$$
取上确界得 $|\nu|(E) \le \int_{E}|f|\,\mathrm{d}\mu$ ✓；
- **下界**：对 $\varepsilo

> 续见 proofs/imp.total-variation-basics.2.md
