# 一致等度连续 + 逐点全有界 $\implies$ 全有界
`imp.fa-ascoli` · 推出 · strong 边 · 根 `../`

`thm.equicontinuous-uniform` 等度连续与一致等度连续 + `thm.arzela-ascoli` Arzelà–Ascoli 定理 → `thm.arzela-ascoli-general` 广义 Arzelà–Ascoli

取有限 $\eta$-网 $x_1,..,x_N$ 覆盖 $K$。每个 $\mathcal{H}(x_i)$ 全有界，取有限 $\varepsilon/3$-网，把这些点合起来得有限集 $T \subseteq E$。
对每个 $f$ 与每个 $i$ 取 $t_i \in T$ 使 $d(f(x_i), t_i) < \varepsilon/3$；由「网点取值落在有限集 $T$ 里」给出**有限**多个候选函数 $\Phi$。对任意 $f$ 与任意 $x \in B(x_i, \eta)$：

$$d(f(x), \varphi(x)) \le \underbrace{d(f(x), f(x_i))}_{< \varepsilon/3} + \underbrace{d(f(x_i), \varphi(x_i))}_{< \varepsilon/3} + \underbrace{d(\varphi(x_i), \varphi(x))}_{< \varepsilon/3} < \varepsilon ,$$

> 续见 proofs/imp.fa-ascoli.3.md
