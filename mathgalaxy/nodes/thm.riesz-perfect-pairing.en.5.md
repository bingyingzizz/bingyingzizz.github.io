# Riesz representation via perfect pairings　`thm.riesz-perfect-pairing`
English entry · root `../`
[in graph](../#n=thm.riesz-perfect-pairing)　·　[Chinese page (authoritative)](./thm.riesz-perfect-pairing.md)

**Proof of (c)**: **Hilbert case (projection theorem)**: Take $\varphi \in H^{*}$. If $\varphi = 0$, take $y = 0$. Otherwise, $E := \ker\varphi$ is a closed proper subspace. By the orthogonal decomposition (`thm.projection-subspace`) $H = E \oplus E^{\perp}$, choose $0 \ne z \in E^{\perp}$. Since $z \notin E$, we have $\varphi(z) \ne 0$. Set $y := \overline{\varphi(z)}\, z / \|z\|^{2}$. For $x = u + \lambda z$ ($u \in E$), we have $\varphi(x) = \lambda\varphi(z)$, and since $\langle x, y\rangle = \lambda\varphi(z)$, we obtain $\varphi(x) = \langle x, y\rangle$. 

> continued in nodes/thm.riesz-perfect-pairing.en.6.md
