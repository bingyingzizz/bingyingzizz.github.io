# 一致等度连续 + 逐点全有界 $\implies$ 全有界
`imp.fa-ascoli` · 推出 · strong 边 · 根 `../`

`thm.equicontinuous-uniform` 等度连续与一致等度连续 + `thm.arzela-ascoli` Arzelà–Ascoli 定理 → `thm.arzela-ascoli-general` 广义 Arzelà–Ascoli

$$d(f(x), \varphi(x)) \le \underbrace{d(f(x), f(x_i))}_{< \varepsilon/3} + \underbrace{d(f(x_i), \varphi(x_i))}_{< \varepsilon/3} + \underbrace{d(\varphi(x_i), \varphi(x))}_{< \varepsilon/3} < \varepsilon ,$$

故 $\Phi$ 是 $\mathcal{H}$ 的有限 $\varepsilon$-网，$\mathcal{H}$ 全有界。$\blacksquare$

> ⚠️ 这段是**骨架**：第三段「$\Phi$ 的构造」（把网点取值按最近网点常值延拓）在不同的书里写法不同。方向是对的，细节没逐字展开。
