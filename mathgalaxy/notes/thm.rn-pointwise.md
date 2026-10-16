# RN 导数的点态公式　`thm.rn-pointwise`　·　说明
根 `../`

⭐ 这条定理把 Radon–Nikodym 导数从「抽象的存在物」变成了**可以逐点算出来的极限**：



$$f(x) = \lim_{r\to0} \nu(B(r, x)) / m(B(r, x))$$



这正是微积分里「密度 $=$ 质量 / 体积」的严格版本，也是「RN 导数是导数的推广」这一说法的根据。

证明的思路：先验证 $d|\nu| = d|\lambda| + |f| dm$，于是 $\lambda$ 与 f dm 都正则、特别地 $f \in L^1_{loc}$；把比值拆成



$$\nu(E_r) / m(E_r) = \lambda(E_r) / m(E_r) + \frac{1}{m(E_r)} \int_{E_r} f\cdot dm$$



第二项由微分定理趋于 f(x)。第一项要证它是 0，用一个「分块 + 覆盖引理 $\lambda (A) = m(A^{c}) = 0$」的论证把坏集压成零测。
