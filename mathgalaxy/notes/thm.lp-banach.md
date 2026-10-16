# L^p 是 Banach 空间　`thm.lp-banach`　·　说明
根 `../`

证明用的判据是：**赋范线性空间完备 $\iff$ 绝对收敛的无穷级数收敛**。

设 $\{f_k\} \subseteq L^p$ 且 $\sum_{k} \|f_k\|_p = B < \infty$。只要证明 $\sum_k f_k$ 在 $L^p$ 范数下收敛即可。

技巧在于把「逐点收敛」与「范数收敛」分开处理：令 $G_n = \sum_{k \le n} |f_k|$、$G = \sum_k |f_k|$，则由 MCT



$$\|G_n\|_p \le \sum_{k \le n} \|f_k\|_p \le B \quad \implies \quad \int G^p = \lim_n \int G_n^p \le B^p$$



故 $G \in L^p$、特别地 $G < \infty$ a.e.，于是 $\sum_k f_k$ **a.e. 绝对收敛**。记极限为 $F$。

再用一次 DCT 拿下范数收敛：$\left| F - \sum_{k \le n} f_k \right|^p \le (2G)^p \in L^1$，故



$$\left\| F - \sum_{k \le n} f_k \right\|_p^p = \int \left| F - \sum_{k \le n} f_k \right|^p \to 0$$



∎
