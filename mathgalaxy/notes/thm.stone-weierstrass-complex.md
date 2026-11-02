# Stone–Weierstrass（复情形）　`thm.stone-weierstrass-complex`　·　说明
根 `../`

归结到实情形：$\operatorname{Re}\, f = (f + \bar f)/2$、$\operatorname{Im}\, f = (f - \bar f)/(2i)$ 都在 $A$ 里。

⚠️ 「对共轭封闭」不能去掉：取 $A = $ 圆盘代数 $\mathrm{Alg}(z) \subseteq C(S^1, \mathbb{C})$（含单位、分离点），则 $\bar z \notin \overline A$ —— 因为 $\int_{S^1} p(z)\,\bar z\,dz = 0$ 对一切多项式 $p$ 成立（Cauchy 定理），而 $\int_{S^1} \bar z\,\bar z\,dz \ne 0$。

⭐ 讲义在这里接上了表示论：紧群 $G$ 的矩阵系数 $e_{ij}$ 生成 $C(G)$（因 $\{e_{ij}\}$ 对共轭封闭），且 $\Delta : C(G) \to C(G) \otimes C(G)$，$e_{ij} \mapsto \sum_k e_{ik} \otimes e_{kj}$ —— Peter–Weyl 的代数骨架。
