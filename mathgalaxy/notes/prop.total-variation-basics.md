# 全变差的基本性质　`prop.total-variation-basics`　·　说明
根 `../`

**证明。** 记 $|\nu|(E) := \sup\bigl\{\sum_{j}|\nu(E_{j})| : E = \bigsqcup_{j} E_{j} \text{ 可数划分} \bigr\}$。
**(a)** 对任意划分，由三角不等式
$$|\nu(E)| = \Bigl|\sum_{j}\nu(E_{j})\Bigr| \le \sum_{j}|\nu(E_{j})|,$$
对一切划分取上确界得 $|\nu(E)| \le |\nu|(E)$ ✓。
**(b)** 设 $d\nu = f\,\mathrm{d}\mu$。
- **上界**：对任意划分
$$\sum_{j}|\nu(E_{j})| = \sum_{j}\Bigl|\int_{E_{j}} f\,\mathrm{d}\mu\Bigr| \le \sum_{j}\int_{E_{j}}|f|\,\mathrm{d}\mu = \int_{E}|f|\,\mathrm{d}\mu,$$
取上确界得 $|\nu|(E) \le \int_{E}|f|\,\mathrm{d}\mu$ ✓；
- **下界**：取只由 $E \cap \{f \ge 0\}$ 与 $E \cap \{f < 0\}$ 组成的划分，此时 $\sum_{j}|\nu(E_{j})| = \int_{E}|f|\,\mathrm{d}\mu$，故上确界 $\ge$ 它 ✓；
两边合起来：$|\nu|(E) = \int_{E}|f|\,\mathrm{d}\mu$，即 $d|\nu| = |f|\,\mathrm{d}\mu$ ✓。
**不同表示的一致性**：若同时有 $d\nu = f_{1}d\mu_{1} = f_

> 续见 notes/prop.total-variation-basics.2.md
