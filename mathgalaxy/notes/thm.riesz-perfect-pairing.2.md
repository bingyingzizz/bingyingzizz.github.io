# Riesz 表示的配对版　`thm.riesz-perfect-pairing`　·　说明
根 `../`

**证明 (c)**：**Hilbert 情形（投影定理）**：取 $\varphi \in H^{*}$。若 $\varphi = 0$ 取 $y = 0$；否则 $E := \ker\varphi$ 是闭真子空间，由正交分解（`thm.projection-subspace`）$H = E \oplus E^{\perp}$，取 $0 \ne z \in E^{\perp}$；因 $z \notin E$，$\varphi(z) \ne 0$。令 $y := \overline{\varphi(z)}\, z / \|z\|^{2}$。对 $x = u + \lambda z$（$u \in E$）有 $\varphi(x) = \lambda\varphi(z)$，而 $\langle x, y\rangle = \lambda\varphi(z)$，故 $\varphi(x) = \langle x, y\rangle$；又 $\|y\| = |\varphi(z)|/\|z\| = \sup_{\|x\| \le 1}|\langle x, y\rangle| = \|\varphi\|$。**$L^{p}$ 情形（Radon–Nikodym）**：设 $\Phi \in (L^{p})^{*}$，先设 $\mu$ 有限（一般测度按 $\sigma$-有限分解）。令 $\nu(E) := \Phi(\chi_{E})$；则 $\nu \ll \mu$，由 Radon–Nikodym（`thm.lebesgue-radon-nikodym`）存在 $g \in L^{1}(\mu)$ 使 $\nu(E) = \int_{E} g\,d\mu$，从而 $\Phi(f) = \int f g\,d\mu$（先简单函数，再对 $f \i

> 续见 notes/thm.riesz-perfect-pairing.3.md
