# 固态阿贝尔群　`def.solid-group`　·　说明
根 `../`

⭐ 一句话：**「$S$ 上的函数」可以唯一地积分成 $A$ 里的元素**。这就是固态理论里「补全」的正确形态 —— 名字叫 solid 而不是 complete，是因为它不是「拓扑上把 Cauchy 列补全」那个意思（$\mathbb{R}$ 的固态化反而是 $0$，见 `cor.solid-compact-generators`）。

⭐ (ii) 等价于「$\operatorname{Hom}(Z[S]^{\blacksquare}, A) \cong \operatorname{Hom}(\mathbb{Z}[S], A) = A(S)$」，即 free solid 群表示函子 $A \mapsto A(S)$。

⚠ (ii) 与 (iii) 的关系不是免费的：由 (ii) 只推出 $A[0]$ 固态；反过来「固态群的 $H^i$ 仍固态」要到 `thm.solid-derived` 才成立。

⚠ 这里只写了**固态阿贝尔群**。模的情形要等解析环（`def.analytic-ring`）才有干净的语言。
