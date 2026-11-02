# 有界算子的延拓　`thm.bounded-extension`　·　说明
根 `../`

证法：给 $x \in E$ 取 $g_n \in G$，$g_n \to x$。由 $\|u(g_n) - u(g_m)\| \le \|u\|\,\|g_n - g_m\|$ 知 $(u(g_n))$ 是 Cauchy 列，$F$ 完备给出极限；定义 $\tilde u(x) := \lim_n u(g_n)$（与取法无关），逐条验证线性、$\|\tilde u\| \le \|u\|$，而在 $G$ 上 $\tilde u = u$ 又给出 $\|\tilde u\| \ge \|u\|$。

⭐ 这是「**先在好用的稠密子集上造算子，再延拓**」的许可证：Fourier 变换（$L^1 \cap L^2$ 上先定义）、Stieltjes 积分、特征值问题的变分形式，全走这一步。

⚠️ $F$ 完备不能去掉（去掉就没有极限可拿）；$G$ 稠密也不能去掉（不稠密时延拓不唯一，只剩 Hahn–Banach 那种「保范但有选择」的延拓）。
