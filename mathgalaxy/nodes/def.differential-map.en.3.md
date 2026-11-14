# Differential of a Smooth Map　`def.differential-map`
English entry · root `../`
[in graph](../#n=def.differential-map)　·　[Chinese page (authoritative)](./def.differential-map.md)

$$\Bigl[\mathrm{d}F_{p}\Bigr]_{\varphi,\psi} = \Bigl(\frac{\partial (\psi \circ F \circ \varphi^{-1})^{i}}{\partial x^{j}}(x)\Bigr)_{i,j},\qquad x = \varphi(p).$$

$\mathrm{d}F_{p}$ is linear and satisfies the **chain rule**

$$\mathrm{d}(G \circ F)_{p} = \mathrm{d}G_{F(p)} \circ \mathrm{d}F_{p},\qquad \mathrm{d}(\operatorname{id}_{N})_{p} = \operatorname{id}_{T_{p}N}.$$

Letting $p$ run over $N$ gives a map of tangent bundles $\mathrm{d}F : TN \to TM$, $v \mapsto \mathrm{d}F_{\pi(v)}(v)$.

> continued in nodes/def.differential-map.en.4.md
