# Hahn–Banach 分离：闭凸包与外面的点分开
`imp.goldstine-hahn-banach` · 推出 · strong 边 · 根 `../`

`thm.hahn-banach` Hahn–Banach 定理 → `thm.goldstine` Goldstine 定理

设 $K=\overline{J_X(B_X)}^{w^{*}}$，若 $K\ne B_{X^{**}}$ 取 $\xi_0\in B_{X^{**}}\setminus K$，令 $C=K-\xi_0$。$C$ 闭凸、不含 $0$，取 Minkowski 泛函 $p$：$p$ 次线性、在 $C$ 上 $\le1$、且 $p(-\xi_0)>1$。在一维子空间 $\mathbb{R}\xi_0$ 上令 $\ell_0(t\xi_0)=-t\,p(-\xi_0)$，验证 $\ell_0\le p$ 后用 `thm.hahn-banach` 延拓成 $X^{**}$ 上的线性泛函 $\ell\le p$；把 $\pm\ell$ 合并得弱*连续泛函把 $\xi_0$ 与 $K$ 分离，与 $K$ 是闭凸包矛盾。∎
