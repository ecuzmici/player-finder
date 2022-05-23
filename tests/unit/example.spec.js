import { shallowMount } from "@vue/test-utils";
import ModalBox from "../../src/components/ModalBox.vue"

describe("HelloWorld.vue", () => {
  it("renders confirming message", () => {
    const msg = "Are you sure you want to choose";
    const wrapper = shallowMount(ModalBox, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
