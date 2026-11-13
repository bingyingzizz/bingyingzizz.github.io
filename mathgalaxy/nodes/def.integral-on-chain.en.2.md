# Integration over a Chain　`def.integral-on-chain`
English entry · root `../`
[in graph](../#n=def.integral-on-chain)　·　[Chinese page (authoritative)](./def.integral-on-chain.md)

Let $c : I^{k}\to M$ be a $k$-cube and $\omega$ a $k$-form defined on a neighbourhood of the image of $c$. On $I^{k}$, $c^{\ast}\omega$ is still a $k$-form, and a $k$-form on a $k$-dimensional region has only one component, so there is a unique $f\in C^{\infty}(I^{k})$ with

$$c^{\ast}\omega = f\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}.$$

Define the integral over the cube

$$\int_{c}\omega := \int_{I^{k}}f = \int_{0}^{1}\cdots\int_{0}^{1}f(x)\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{k},$$

and extend linearly to chains:

$$\int_{\sum_{l}n_{l}c_{l}}\omega := \sum_{l}n_{l}\int_{c_{l}}\omega .$$

> continued in nodes/def.integral-on-chain.en.3.md
