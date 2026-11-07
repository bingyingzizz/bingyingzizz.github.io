# 辛标准形定理　`thm.symplectic-normal-form`　·　说明
根 `../`

**分类的收尾**：若 $(V, \omega)$ 与 $(V^{\prime}, \omega^{\prime})$ 同维数 $2n$，分别取辛基 $e_{i}, f_{i}$ 与 $e^{\prime}_{i}, f^{\prime}_{i}$，令 $T(e_{i}) = e^{\prime}_{i}$、$T(f_{i}) = f^{\prime}_{i}$ 并线性延拓。$T$ 把一组基送到一组基，故是同构；又 $\omega^{\prime}(Te_{i}, Tf_{j}) = \delta_{ij} = \omega(e_{i}, f_{j})$，而两边都是交错双线性形式、在基对上取值相同，故 $\omega^{\prime}(Tu, Tv) = \omega(u, v)$ 对一切 $u, v$ 成立：$T$ 是等距同构。∎

⭐ **为什么比对称型简单**：对称型要化成对角形，得处理「同一个数能不能开平方」的问题（所以 $\mathbb{R}$ 上分正负、$\mathbb{C}$ 上只剩秩）；交错型的标准形 $J_{0}$ 里只有 $0$ 和 $\pm 1$，**没有待开方的系数**。这就是「辛几何在任意域（$\operatorname{char} \ne 2$）上都长一样」的原因。

> 续见 notes/thm.symplectic-normal-form.4.md
